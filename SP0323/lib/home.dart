import 'package:flutter/material.dart';
import 'package:studypods_ecommerce/home_widgets/carousel.dart';
import 'package:studypods_ecommerce/productdetail.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        children: [
          const SliderScreen(),
          Padding(
            padding: const EdgeInsets.all(25.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text(
                  'Featured',
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 24),
                ),
              ],
            ),
          ),
          Expanded(
            child: Container(
              padding: const EdgeInsets.fromLTRB(25, 0, 0, 0),
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    mainAxisSpacing: 10,
                    crossAxisSpacing: 10,
                    childAspectRatio: 0.8),
                itemCount: 6,
                itemBuilder: (context, index) {
                  return InkWell(
                    onTap: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) {
                          return ProductDetailsPage(
                            name: name[index],
                            description: name[index],
                            price: price[index],
                            image: image[index],
                          );
                        }),
                      );
                    },
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: Container(
                            width: double.maxFinite,
                            decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(20)),
                            child: Stack(
                              children: [
                                const CircleAvatar(
                                  radius: 45,
                                  backgroundColor: Colors.white,
                                ),
                                Image.asset(image[index])
                              ],
                            ),
                          ),
                        ),
                        Text(
                          name[index],
                          style: const TextStyle(
                              fontSize: 20, fontWeight: FontWeight.w500),
                        ),
                        Text(
                          price[index],
                          style: const TextStyle(
                              fontSize: 16, fontWeight: FontWeight.w700),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          )
        ],
      ),
    );
  }

  List image = [
    "assets/hoodie.jpg",
    "assets/mobile.jpg",
    "assets/laptop.jpg",
    "assets/shoes.jpg",
    "assets/bag.jpg",
    "assets/headphone.jpg",
  ];

  List name = [
    "Men's Hoodie",
    "iPhone 13 Pro Max, Red",
    "hp Pavilion Laptop(16 GB RAM, 512 GB SSD)",
    "Campus Running shoes for men",
    "Baggit handbag",
    "Boat Rockerz headphone"
  ];

  List price = [
    "1399",
    "149999",
    "79999",
    "1899",
    "4999",
    "2599",
  ];
}
