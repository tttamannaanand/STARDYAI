class Opportunity {
  final String title;
  final String company;
  final String location;
  final String type; // "PAID INTERNSHIP" / "PROJECT"
  final String category; // e.g., TECH, DESIGN
  final String image; // optional, company logo

  Opportunity({
    required this.title,
    required this.company,
    required this.location,
    required this.type,
    required this.category,
    this.image = '',
  });
}
