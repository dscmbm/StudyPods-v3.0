import 'package:flutter/material.dart';
import 'package:studypods_ecommerce/utils/colors.dart';

class PrimaryButton extends StatelessWidget {
  final void Function() onPressed;
  final String text;
  final bool? fullWidth;
  const PrimaryButton({
    super.key,
    required this.onPressed,
    required this.text,
    this.fullWidth,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: fullWidth == true ? MediaQuery.of(context).size.width - 40 : null,
      child: ElevatedButton(
        style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all(
            AppColors.yellow,
          ),
        ),
        onPressed: onPressed,
        child: Padding(
          padding: const EdgeInsets.all(14.0),
          child: Text(
            text,
            style: const TextStyle(
              fontSize: 18,
              color: Colors.white,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
    );
  }
}
