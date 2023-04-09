import 'package:flutter/material.dart';
import 'package:studypods_ecommerce/utils/colors.dart';

class Logo extends StatelessWidget {
  final double? fontSize;
  const Logo({super.key, this.fontSize});

  @override
  Widget build(BuildContext context) {
    return Text.rich(
      const TextSpan(
        children: [
          TextSpan(
            text: 'My',
            style: TextStyle(color: AppColors.yellow),
          ),
          TextSpan(
            text: 'Shop',
            style: TextStyle(color: Colors.white),
          ),
        ],
      ),
      style: TextStyle(fontSize: fontSize ?? 40, fontWeight: FontWeight.w800),
    );
  }
}
