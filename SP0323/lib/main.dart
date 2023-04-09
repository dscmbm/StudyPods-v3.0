import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:studypods_ecommerce/cart.dart';
import 'package:studypods_ecommerce/catalogue.dart';
import 'package:studypods_ecommerce/onboarding/getting_started.dart';
import 'package:studypods_ecommerce/home.dart';
import 'package:studypods_ecommerce/profile.dart';
import 'package:studypods_ecommerce/utils/app_constants.dart';
import 'package:studypods_ecommerce/utils/cart.dart';
import 'package:studypods_ecommerce/utils/logo.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider.value(
        value: Cart(),
      ),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const GettingStarted(),
    );
  }
}

class MyShop extends StatefulWidget {
  const MyShop({super.key});

  @override
  State<MyShop> createState() => _MyShopState();
}

class _MyShopState extends State<MyShop> {
  var currentIndex = 0;

  List<Widget> screens = [
    const MyHomePage(),
    const Catalogue(),
    const CartPage(),
    const Profile(),
  ];

  Widget currentScreen = const MyHomePage();

  List<IconData> listOfIcons = [
    Icons.home_rounded,
    Icons.list,
    Icons.favorite_rounded,
    Icons.person_rounded,
  ];

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.purple,
          flexibleSpace: Container(
            decoration: const BoxDecoration(
              gradient: AppConstants.gradient,
            ),
          ),
          centerTitle: true,
          title: const Logo(
            fontSize: 22,
          ),
          actions: [
            IconButton(onPressed: () {}, icon: const Icon(Icons.shopping_cart)),
            IconButton(onPressed: () {}, icon: const Icon(Icons.notifications)),
          ],
        ),
        drawer: const Drawer(),
        body: currentScreen,
        bottomNavigationBar: Container(
          margin: const EdgeInsets.all(20),
          height: size.width * .155,
          decoration: BoxDecoration(
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(.15),
                blurRadius: 30,
                offset: const Offset(0, 10),
              ),
            ],
            borderRadius: BorderRadius.circular(50),
          ),
          child: ListView.builder(
            itemCount: 4,
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.symmetric(horizontal: size.width * .024),
            itemBuilder: (context, index) => InkWell(
              onTap: () {
                setState(
                  () {
                    currentIndex = index;
                    currentScreen = screens[index];
                  },
                );
              },
              splashColor: Colors.transparent,
              highlightColor: Colors.transparent,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 1500),
                    curve: Curves.fastLinearToSlowEaseIn,
                    margin: EdgeInsets.only(
                      bottom: index == currentIndex ? 0 : size.width * .029,
                      right: size.width * .0422,
                      left: size.width * .0422,
                    ),
                    width: size.width * .128,
                    height: index == currentIndex ? size.width * .014 : 0,
                    decoration: const BoxDecoration(
                      color: Colors.purpleAccent,
                      borderRadius: BorderRadius.vertical(
                        bottom: Radius.circular(10),
                      ),
                    ),
                  ),
                  Icon(
                    listOfIcons[index],
                    size: size.width * .076,
                    color: index == currentIndex
                        ? Colors.purpleAccent
                        : Colors.black38,
                  ),
                  SizedBox(height: size.width * .03),
                ],
              ),
            ),
          ),
        ));
  }
}
