import 'package:flutter/material.dart';
import 'package:training_paws/screens/login_screen/login_screen.dart';
import 'package:google_fonts/google_fonts.dart';



class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;


  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      body: Center(
          child:Stack(
            children:[
              Container(
                decoration:BoxDecoration(
                  image:DecorationImage(
                    fit:BoxFit.cover,
                    image: AssetImage('assets/images/dogcollageImage22.jpeg'),
                  ),
                ),
              ),
              Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [Container(
                    width:300,
                    height:300,
                    child: Center(
                      child: RichText(
                        textAlign: TextAlign.center,
                        text: TextSpan(text:'WELCOME TO TRAINING PAWS!!!',style: GoogleFonts.aladin(
                          textStyle: TextStyle(
                            fontSize: 60.0,
                            fontWeight: FontWeight.w900,
                            color: Colors.purple
                          ),
                        ),
                        ),
                      ),
                    ),
                  ),
                    SizedBox(height:150),
                    Center(
                      child: Container(
                        width:225,
                        height:50,
                        child: ElevatedButton(
                          style:ElevatedButton.styleFrom(
                              foregroundColor: Colors.white, backgroundColor: Colors.purple
                          ),
                          child:Center(child: Row(
                            children: [
                              Text('Start Training   ',style:TextStyle(fontSize: 20)),
                              Icon( Icons.arrow_forward, )
                            ],
                          )),

                          onPressed:(){
                            Navigator.pushReplacement(context,
                                MaterialPageRoute(
                                  builder:(context) => LoginScreen(),

                                ));
                          },
                        ),
                      ),
                    ),
                  ]
              ),



            ],
          )

      ),

    );
  }
}
