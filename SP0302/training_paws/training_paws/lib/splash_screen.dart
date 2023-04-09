import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:google_fonts/google_fonts.dart';


import 'package:training_paws/welcome.dart';
class SplashScreen extends StatefulWidget {
  @override
  State <SplashScreen> createState() => _SplashScreenState();
}
class _SplashScreenState extends State<SplashScreen>{

  @override
  void initState(){
    super.initState();

    Timer(Duration(seconds:4),(){
      Navigator.pushReplacement(context,
          MaterialPageRoute(
            builder:(context) => MyHomePage(title: 'hello',),

          ));
    });
  }

  @override
  Widget build(BuildContext context){
    return Scaffold(
      body: Container(
        height:double.infinity,
        width:double.infinity,
        decoration:BoxDecoration(
          gradient:RadialGradient(
            radius: 0.8,
            colors:[
              Color(0xffffecd2),
              Color(0xFFfcb69f),
            ],
          ),
        ),
        child:Center(
          child: Column(
            children: [
              CircleAvatar(
                backgroundColor:Color(0xffecd2),
                backgroundImage:AssetImage('assets/images/splash.gif'),
                radius:50,
              ),
              SizedBox(height:50),
              Center(
                child: Text(
                  'TRAINING \n PAWS',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.arvo(
                    textStyle: TextStyle(
                      fontSize: 38.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.purple,
                    ),
                  ),
                ),
              ),
            ],
            mainAxisAlignment:MainAxisAlignment.center,
          ),
        ),
      ),
    );
  }}
