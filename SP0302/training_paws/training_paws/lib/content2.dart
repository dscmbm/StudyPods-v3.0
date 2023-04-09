import 'package:flutter/material.dart';
import 'package:training_paws/utils/utils.dart';
import 'package:google_fonts/google_fonts.dart';


class DetailsPage1 extends StatefulWidget {
  final int index;
  final List<String> friendNames; // Add this line to define the friendNames list
  final List<String> description; // Add this line to define the friendNames list

  const DetailsPage1({Key? key, required this.index, required this.friendNames, required this.description}) : super(key: key);

  @override
  _DetailsPage1State createState() => _DetailsPage1State();
}

class _DetailsPage1State extends State<DetailsPage1> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: AppColors.backGroundColor,
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: Row(
          children: [
            Image.asset(
              'assets/images/logo.png',
              height: 55,
              width: 55,
            ),
            SizedBox(width: 8),
            Text(
              'Training Paws',
              style: GoogleFonts.arvo(
                textStyle: TextStyle(
                  fontSize: 22.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        ),
        automaticallyImplyLeading: false, // This line removes the back button
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [


            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(30),
                  bottomRight: Radius.circular(30),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.5),
                    spreadRadius: 5,
                    blurRadius: 7,
                    offset: Offset(0, 3), // changes position of shadow
                  ),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(30),
                  bottomRight: Radius.circular(30),
                ),
                child: Image.asset(
                  'assets/images/photo_${widget.index + 1}.jpeg',
                  fit: BoxFit.cover,
                  height: 250,
                  width: double.infinity,
                ),
              ),
            ),
            SizedBox(
              height: 40,
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 24.0),
              child: Text(
                '${widget.friendNames[widget.index]}',
                style: SafeGoogleFont(
                  'Mulish',
                  fontSize: 24,
                  fontWeight: FontWeight.w800,
                  height: 1.3,
                  color: Color(0xff1a434e),
                ),
              ),
            ),


            Padding(
              padding: EdgeInsets.symmetric(horizontal: 24.0, vertical: 24),
              child: Text(
                'An ${widget.description[widget.index]} .',
                style: SafeGoogleFont(
                  'Mulish',
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                  height: 1.8,
                  color: Color(0xff768487),
                ),
              ),
            ),


          ],
        ),
      ),
    );
  }
}
