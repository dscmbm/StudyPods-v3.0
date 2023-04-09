import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:studypods_ecommerce/utils/cart.dart';

class CartPage extends StatelessWidget {
  const CartPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<Cart>(context);
    return ListView(
      children: [
        ListView.builder(
          shrinkWrap: true,
          itemCount: cart.items.length,
          itemBuilder: (ctx, i) => CartItem(
            id: cart.items.values.toList()[i].id,
            name: cart.items.values.toList()[i].name,
            quantity: cart.items.values.toList()[i].quantity,
            price: cart.items.values.toList()[i].price,
            image: cart.items.values.toList()[i].imageUrl,
          ),
        ),
        const SizedBox(height: 16),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Total: ${cart.totalAmount}',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  // TODO: Implement checkout functionality.
                },
                child: const Text('Checkout'),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class CartItem extends StatelessWidget {
  final String id;
  final String name;
  final String image;
  final String price;
  final int quantity;

  const CartItem({
    Key? key,
    required this.id,
    required this.name,
    required this.image,
    required this.price,
    required this.quantity,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<Cart>(context);
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Image.asset(
            image,
            width: 80,
            height: 80,
            fit: BoxFit.cover,
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                const SizedBox(height: 8),
                Text(
                  '\$${(double.parse(price) * quantity).toStringAsFixed(2)}',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    IconButton(
                      onPressed: () {
                        cart.removeSingleItem(id);
                      },
                      icon: const Icon(Icons.remove_circle_outline),
                    ),
                    Text(quantity.toString()),
                    IconButton(
                      onPressed: () {
                        cart.addItem(id, name, price, image);
                      },
                      icon: const Icon(Icons.add_circle_outline),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
