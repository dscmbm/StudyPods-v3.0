import 'package:flutter/material.dart';
import 'package:studypods_ecommerce/onboarding/phone_number.dart';
import 'package:studypods_ecommerce/utils/app_constants.dart';
import 'package:studypods_ecommerce/utils/logo.dart';
import 'package:studypods_ecommerce/utils/primary_button.dart';

class GettingStarted extends StatelessWidget {
  const GettingStarted({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Image.asset('assets/image.png'),
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              height: 400,
              width: double.infinity,
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(50),
                  topRight: Radius.circular(50),
                ),
                gradient: AppConstants.gradient,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  const Logo(),
                  const Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                      style: TextStyle(color: Colors.white, fontSize: 18),
                      textAlign: TextAlign.center,
                    ),
                  ),
                  PrimaryButton(
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) {
                          return const PhoneNumber();
                        }),
                      );
                    },
                    text: 'Get Started',
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
