import 'package:flutter/material.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import '../widgets/courseModel.dart';
import '../widgets/color_codes.dart';

class VideoLearningPage extends StatefulWidget {
  final Course course;

  const VideoLearningPage({super.key, required this.course});

  @override
  State<VideoLearningPage> createState() => _VideoLearningPageState();
}

class _VideoLearningPageState extends State<VideoLearningPage> {
  YoutubePlayerController? _controller;

  int currentIndex = 0;
  String? currentVideoId;
  Set<String> completedVideos = {};
  List<Map<String, String>> allVideos = [];

  @override
  void initState() {
    super.initState();
    _flattenVideos();
    if (allVideos.isNotEmpty) {
      _loadVideo(0);
    }
  }

  void _flattenVideos() {
    for (var chapter in widget.course.chapters) {
      for (var topic in chapter.topics) {
        allVideos.add({"title": topic.title, "url": topic.videoUrl});
      }
    }
  }

  void _loadVideo(int index) {
    final videoId = YoutubePlayer.convertUrlToId(allVideos[index]["url"]!)!;

    _controller?.dispose();

    _controller = YoutubePlayerController(
      initialVideoId: videoId,
      flags: const YoutubePlayerFlags(autoPlay: true, mute: false),
    );

    _controller!.addListener(() {
      if (_controller!.value.position >= _controller!.value.metaData.duration &&
          !_controller!.value.isPlaying) {
        completedVideos.add(videoId);
        setState(() {});
      }
    });

    setState(() {
      currentIndex = index;
      currentVideoId = videoId;
    });
  }

  double getProgress() {
    if (allVideos.isEmpty) return 0;
    return completedVideos.length / allVideos.length;
  }

  @override
  void dispose() {
    _controller?.dispose();
    super.dispose();
  }

  // ───────────────── UI ─────────────────
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primaryDarkBlue,
      appBar: AppBar(
        backgroundColor: AppColors.primaryDarkBlue,
        iconTheme: const IconThemeData(color: Colors.white),
        title: Text(
          widget.course.title,
          style: const TextStyle(color: Colors.white),
        ),
      ),
      body: Column(
        children: [
          if (_controller != null)
            YoutubePlayer(
              controller: _controller!,
              showVideoProgressIndicator: true,
            ),

          // CONTROLS
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: () {
                  if (currentIndex > 0) {
                    _loadVideo(currentIndex - 1);
                  }
                },
                icon: const Icon(Icons.skip_previous, color: Colors.white),
              ),
              IconButton(
                onPressed: () {
                  final pos = _controller!.value.position;
                  _controller!.seekTo(pos - const Duration(seconds: 10));
                },
                icon: const Icon(Icons.replay_10, color: Colors.white),
              ),
              IconButton(
                onPressed: () {
                  if (_controller!.value.isPlaying) {
                    _controller!.pause();
                  } else {
                    _controller!.play();
                  }
                  setState(() {});
                },
                icon: Icon(
                  _controller!.value.isPlaying
                      ? Icons.pause_circle_filled
                      : Icons.play_circle_fill,
                  color: AppColors.primaryOrange,
                  size: 40,
                ),
              ),
              IconButton(
                onPressed: () {
                  final pos = _controller!.value.position;
                  _controller!.seekTo(pos + const Duration(seconds: 10));
                },
                icon: const Icon(Icons.forward_10, color: Colors.white),
              ),
              IconButton(
                onPressed: () {
                  if (currentIndex < allVideos.length - 1) {
                    _loadVideo(currentIndex + 1);
                  }
                },
                icon: const Icon(Icons.skip_next, color: Colors.white),
              ),
            ],
          ),

          // PROGRESS
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              children: [
                LinearProgressIndicator(
                  value: getProgress(),
                  minHeight: 8,
                  backgroundColor: Colors.grey[800],
                  color: AppColors.primaryOrange,
                ),
                const SizedBox(height: 6),
                Text(
                  "${(getProgress() * 100).toInt()}% Completed",
                  style: const TextStyle(color: Colors.white),
                ),
              ],
            ),
          ),

          const SizedBox(height: 10),

          // CHAPTERS & TOPICS
          Expanded(
            child: ListView.builder(
              itemCount: widget.course.chapters.length,
              itemBuilder: (context, chapterIndex) {
                final chapter = widget.course.chapters[chapterIndex];

                return ExpansionTile(
                  iconColor: AppColors.primaryOrange,
                  collapsedIconColor: Colors.white,
                  title: Text(
                    chapter.title,
                    style: const TextStyle(color: Colors.white),
                  ),
                  children: chapter.topics.map((topic) {
                    final videoId = YoutubePlayer.convertUrlToId(
                      topic.videoUrl,
                    )!;

                    final flatIndex = allVideos.indexWhere(
                      (e) => e["url"] == topic.videoUrl,
                    );

                    IconData icon;
                    Color color;

                    if (completedVideos.contains(videoId)) {
                      icon = Icons.check_circle;
                      color = Colors.green;
                    } else if (flatIndex == currentIndex) {
                      icon = Icons.pause_circle;
                      color = Colors.blue;
                    } else {
                      icon = Icons.play_circle_fill;
                      color = AppColors.primaryOrange;
                    }

                    return ListTile(
                      leading: Icon(icon, color: color),
                      title: Text(
                        topic.title,
                        style: const TextStyle(color: Colors.white),
                      ),
                      onTap: () => _loadVideo(flatIndex),
                    );
                  }).toList(),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
