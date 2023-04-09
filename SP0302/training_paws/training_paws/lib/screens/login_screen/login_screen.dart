import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'components/center_widget/center_widget.dart';
import 'components/login_content.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    return Scaffold(
      body: Container(
        child: const LoginContent(),
      )
      // Stack(
      //   children: [
      //     Positioned(
      //       top: -160,
      //       left: -30,
      //       child: topWidget(screenSize.width),
      //     ),
      //     Positioned(
      //       bottom: -180,
      //       left: -40,
      //       child: bottomWidget(screenSize.width),
      //     ),
      //     const LoginContent(),
      //   ],
      // ),
    );
  }
}
