import 'package:flutter/material.dart';

class Catalogue extends StatefulWidget {
  const Catalogue({super.key});

  @override
  State<Catalogue> createState() => _CatalogueState();
}

class _CatalogueState extends State<Catalogue> {
  List categories = [
    {"name": "Womens Fashion", "image": 'assets/women.jpeg'},
    {"name": "Mens Fashion", "image": 'assets/men.jpeg'},
    {"name": "Electronic Iteams", "image": 'assets/electronic.jpg'},
    {"name": "sport", "image": 'assets/sports.jpg'},
    {"name": "Gym tools", "image": 'assets/gymtools.jpg'},
    {"name": "Kitchen", "image": 'assets/kitchen.jpg'},
    {"name": "Kids Wear", "image": 'assets/kids.jpeg'},
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(8.0),
        child: ListView.builder(
          shrinkWrap: true,
          itemCount: categories.length,
          itemBuilder: (_, index) {
            return Card(
              elevation: 5,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    Text(
                      categories[index]['name'],
                      style: const TextStyle(
                          fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    const Spacer(),
                    Image.asset(
                      categories[index]['image'],
                      height: 100,
                    )
                  ],
                ),
              ),
            );
          },
        ));
  }
}
