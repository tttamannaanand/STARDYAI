import 'package:flutter/material.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import '../widgets/color_codes.dart';
import '../widgets/courseModel.dart';

class LearningPage extends StatefulWidget {
  final Course course;

  const LearningPage({super.key, required this.course});

  @override
  State<LearningPage> createState() => _LearningPageState();
}

class _LearningPageState extends State<LearningPage> {
  YoutubePlayerController? _controller;

  int currentIndex = 0;
  String? currentVideoId;
  Set<String> completedVideos = {};

  final List<Map<String, dynamic>> chapters = [
    {
      "chapter": "Chapter 1: Introduction",
      "topics": [
        {
          "title": "Flutter Basics",
          "url": "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        },
        {
          "title": "Dart Basics",
          "url": "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",
        },
      ],
    },
    {
      "chapter": "Chapter 2: UI Design",
      "topics": [
        {
          "title": "Widgets Explained",
          "url": "https://www.youtube.com/watch?v=x0uinJvhNxI",
        },
      ],
    },
  ];

  List<Map<String, String>> allVideos = [];

  @override
  void initState() {
    super.initState();
    flattenVideos();
    loadVideo(0);
  }

  void flattenVideos() {
    for (var chapter in chapters) {
      for (var topic in chapter["topics"]) {
        allVideos.add({"title": topic["title"], "url": topic["url"]});
      }
    }
  }

  void loadVideo(int index) {
    String url = allVideos[index]["url"]!;
    String videoId = YoutubePlayer.convertUrlToId(url)!;

    _controller?.dispose();

    _controller = YoutubePlayerController(
      initialVideoId: videoId,
      flags: const YoutubePlayerFlags(autoPlay: true, mute: false),
    );

    _controller!.addListener(() {
      setState(() {});

      if (_controller!.value.position >= _controller!.value.metaData.duration &&
          !_controller!.value.isPlaying) {
        completedVideos.add(videoId);
      }
    });

    setState(() {
      currentIndex = index;
      currentVideoId = videoId;
    });
  }

  void togglePlayPause() {
    if (_controller == null) return;

    if (_controller!.value.isPlaying) {
      _controller!.pause();
    } else {
      _controller!.play();
    }
    setState(() {});
  }

  void nextVideo() {
    if (currentIndex < allVideos.length - 1) {
      loadVideo(currentIndex + 1);
    }
  }

  void previousVideo() {
    if (currentIndex > 0) {
      loadVideo(currentIndex - 1);
    }
  }

  void skipForward() {
    final pos = _controller!.value.position;
    _controller!.seekTo(pos + const Duration(seconds: 10));
  }

  void skipBackward() {
    final pos = _controller!.value.position;
    _controller!.seekTo(pos - const Duration(seconds: 10));
  }

  double getProgress() {
    return completedVideos.length / allVideos.length;
  }

  @override
  void dispose() {
    _controller?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primaryDarkBlue,
      appBar: AppBar(
        backgroundColor: AppColors.primaryDarkBlue,
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text(
          "Course Learning",
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: Column(
        children: [
          YoutubePlayer(
            controller: _controller!,
            showVideoProgressIndicator: true,
          ),

          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: previousVideo,
                icon: const Icon(Icons.skip_previous, color: Colors.white),
              ),
              IconButton(
                onPressed: skipBackward,
                icon: const Icon(Icons.replay_10, color: Colors.white),
              ),
              IconButton(
                onPressed: togglePlayPause,
                icon: Icon(
                  _controller != null && _controller!.value.isPlaying
                      ? Icons.pause_circle_filled
                      : Icons.play_circle_fill,
                  color: Colors.orange,
                  size: 40,
                ),
              ),
              IconButton(
                onPressed: skipForward,
                icon: const Icon(Icons.forward_10, color: Colors.white),
              ),
              IconButton(
                onPressed: nextVideo,
                icon: const Icon(Icons.skip_next, color: Colors.white),
              ),
            ],
          ),

          /// ---------------- PROGRESS BAR ----------------
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              children: [
                LinearProgressIndicator(
                  value: getProgress(),
                  backgroundColor: Colors.grey[800],
                  color: AppColors.primaryOrange,
                  minHeight: 8,
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

          /// ---------------- CHAPTER UI ----------------
          Expanded(
            child: ListView.builder(
              itemCount: chapters.length,
              itemBuilder: (context, chapterIndex) {
                return ExpansionTile(
                  collapsedIconColor: Colors.white,
                  iconColor: AppColors.primaryOrange,
                  title: Text(
                    chapters[chapterIndex]["chapter"],
                    style: const TextStyle(color: Colors.white),
                  ),
                  children: List.generate(
                    chapters[chapterIndex]["topics"].length,
                    (topicIndex) {
                      var topic = chapters[chapterIndex]["topics"][topicIndex];

                      String videoId = YoutubePlayer.convertUrlToId(
                        topic["url"],
                      )!;

                      int flatIndex = allVideos.indexWhere(
                        (video) => video["url"] == topic["url"],
                      );

                      IconData icon;
                      Color iconColor;

                      if (completedVideos.contains(videoId)) {
                        icon = Icons.check_circle;
                        iconColor = Colors.green;
                      } else if (flatIndex == currentIndex) {
                        icon = Icons.pause_circle;
                        iconColor = Colors.blue;
                      } else {
                        icon = Icons.play_circle_fill;
                        iconColor = Colors.orange;
                      }

                      return ListTile(
                        leading: Icon(icon, color: iconColor),
                        title: Text(
                          topic["title"],
                          style: const TextStyle(color: Colors.white),
                        ),
                        onTap: () {
                          loadVideo(flatIndex);
                        },
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
