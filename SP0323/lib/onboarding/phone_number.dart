import 'package:flutter/material.dart';
import 'package:studypods_ecommerce/onboarding/otp_screen.dart';
import 'package:studypods_ecommerce/utils/app_constants.dart';
import 'package:studypods_ecommerce/utils/primary_button.dart';

class PhoneNumber extends StatefulWidget {
  const PhoneNumber({super.key});

  @override
  State<PhoneNumber> createState() => _PhoneNumberState();
}

class _PhoneNumberState extends State<PhoneNumber> {
  final GlobalKey<FormState> _form = GlobalKey<FormState>();
  final TextEditingController _phoneNumber = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _form,
        child: Column(
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
                  'What Is Your Phone \nNumber?',
                  style: TextStyle(
                    fontSize: 22,
                    color: Colors.white,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(18.0),
              child: Text(
                "Please enter your phone number to verify  your account",
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextFormField(
                controller: _phoneNumber,
                validator: (value) {
                  // if (value == '') {
                  //   return 'Phone Number can\'t be empty';
                  // }
                  // return null;
                },
                keyboardType: TextInputType.phone,
                decoration: InputDecoration(
                  focusedBorder: const OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.blue, width: 1),
                  ),
                  enabledBorder: const OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey, width: 1),
                  ),
                  prefixIcon: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        children: const [
                          Text(
                            "🇮🇳",
                            style: TextStyle(
                              fontSize: 28,
                              color: Colors.white,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          Icon(Icons.arrow_drop_down)
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
            PrimaryButton(
              onPressed: () {
                if (_form.currentState!.validate()) {
                  Navigator.of(context).push(
                    MaterialPageRoute(builder: (context) {
                      return OtpScreen(
                        phoneNumber: _phoneNumber.text,
                      );
                    }),
                  );
                }
              },
              text: 'Send Verification Code',
              fullWidth: true,
            ),
            TextButton(
              onPressed: () {},
              child: const Text(
                'Skip',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey,
                  fontWeight: FontWeight.w600,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
