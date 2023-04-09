import 'package:flutter/material.dart';
import 'package:pinput/pinput.dart';
import 'package:studypods_ecommerce/main.dart';
import 'package:studypods_ecommerce/utils/app_constants.dart';
import 'package:studypods_ecommerce/utils/primary_button.dart';

class OtpScreen extends StatefulWidget {
  final String phoneNumber;
  const OtpScreen({super.key, required this.phoneNumber});

  @override
  State<OtpScreen> createState() => _OtpScreenState();
}

class _OtpScreenState extends State<OtpScreen> {
  final borderColor = const Color.fromRGBO(30, 60, 87, 1);

  @override
  Widget build(BuildContext context) {
    const defaultPinTheme = PinTheme(
      width: 56,
      height: 56,
      textStyle: TextStyle(
        fontSize: 22,
        color: Color.fromRGBO(30, 60, 87, 1),
      ),
      decoration: BoxDecoration(),
    );

    final cursor = Column(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        Container(
          width: 56,
          height: 3,
          decoration: BoxDecoration(
            color: borderColor,
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ],
    );

    final preFilledWidget = Column(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        Container(
          width: 56,
          height: 3,
          decoration: BoxDecoration(
            color: Colors.purple,
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ],
    );
    return Scaffold(
      body: Column(
        children: [
          Container(
            height: 300,
            alignment: Alignment.centerLeft,
            width: double.infinity,
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.only(
                bottomRight: Radius.circular(200),
              ),
              gradient: AppConstants.gradient,
            ),
            child: const Padding(
              padding: EdgeInsets.all(22.0),
              child: Text(
                'Verification \nCode',
                style: TextStyle(
                  fontSize: 22,
                  color: Colors.white,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
          ),
          Align(
            alignment: Alignment.centerLeft,
            child: Padding(
              padding: const EdgeInsets.all(18.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "Please enter Code sent to",
                    style: TextStyle(
                      fontSize: 20,
                    ),
                  ),
                  Text(
                    "+91 ${widget.phoneNumber}",
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(18.0),
            child: Center(
              child: Pinput(
                length: 4,
                pinAnimationType: PinAnimationType.slide,
                // controller: controller,
                // focusNode: focusNode,
                defaultPinTheme: defaultPinTheme,
                // showCursor: true,
                cursor: cursor,
                preFilledWidget: preFilledWidget,
              ),
            ),
          ),
          PrimaryButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) {
                  return const MyShop();
                }),
              );
            },
            text: 'Login',
            fullWidth: true,
          ),
          TextButton(
            onPressed: () {},
            child: const Text(
              'Resend Code',
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey,
                fontWeight: FontWeight.w600,
              ),
            ),
          )
        ],
      ),
    );
  }
}
