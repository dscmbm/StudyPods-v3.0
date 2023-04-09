import 'package:flutter/material.dart';
import 'dart:math';
import 'package:google_fonts/google_fonts.dart';
import '../content2.dart';



class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

 @override
  Widget build(BuildContext context) {
   final List<String> friendNames = ['Recall Mastery', 'Barking Solution', 'Trick Training', 'Puppy Biting', 'Separation Anxiety', 'Leash Pulling'];

   final List<String> description = ['''Step 1: Hold treats within your dog’s smelling/licking range. Give your recall cue and back up as your dog moves toward you to get the treats.
Step 2: After about five days of practicing Step 1 (at least three to four times a day), continue in the same way, but with the treats behind your back. Practice this daily for at least three weeks before introducing distractions.
Step 3: As your dog starts responding confidently to his recall word at home, practice the behavior while on your daily neighborhood walk.
Step 4: After about three weeks of regular, on-leash foundation training you’ll likely find that your dog is happily running toward you as you call him and move away. Congratulations!
''',
     '''Step1:Shouting stimulates your dog to bark more because they think you’re joining in. So the first rule is to speak calmly and firmly, but don’t yell.
   Step2:When your dog is barking, say “Quiet” in a calm, firm     voice. Wait until they stop barking, even if it’s just to take a breath, then praise them and give them a treat. Just be careful to never reward them while they are barking.
Step3: Eventually they will figure out that if they stop barking at the word “quiet” they get a treat.
Step4: Practice these commands when they are calm, and in time they should learn to stop barking at your command, even when they want to bark at something.
''',

     '''SIT:Hold a treat above your dog's head and slowly move your hand further up. Your dog will follow the treat with his nose, which will automatically make him sit. Reward this by giving him the treat. Over time, introduce a hand and word signal and increase the distractions under which your four-legged friend must sit.
STAY: The best way to practice this trick is to have your dog sit and hold your hand in front of him like a stop sign. Now say "Stay.". With time, you can increase the duration and distance and include distractions. Your dog should only receive his reward if he remains seated. If your pet gets up without permission, repeat the exercise from the beginning.
GIVE PAW: Hide a treat in your hand in front of your pelt nose. In the beginning, he gets the food with every movement of the paw. Later, your darling only gets it when he really touches your hand.If he can do this well, hold the treat behind one hand and require him to touch the empty closed hand in front of him. Little by little, open your hand until he can put his paw in your open, flat hand. Now use the signal word, . You can also vary the duration of how long your four-legged friend should keep his paw on your hand.
JUMP: For this trick, your dog must be At least one year old to avoid injury and damage to the joints. Use a treat or toy and your body language to encourage your pet to jump up. When you do this, give the sound signal "hop" or "jump". Not all dogs like to jump, so be patient with him.Repeat the exercise until your dog only needs the word signal and a hand movement to jump. You can also leave out the toy or treat. After he jumps, immediately reward him with a treat and verbal praise each time. 
''',

     '''There are two main reasons puppies bite: because they're teething and because it's natural for dogs to use their mouths to engage with the world. 
      They don't have hands! Be aware that puppy biting is normal and can last for a period of months. Your goal is to help decrease and redirect the behavior, not extinguish it over night. 
      When your pup bites, you essentially have two choices. You can either redirect to a proper chew or toy or you can redirect to a training session. 
      To redirect to a chew, when your pup starts to bite do the following: Say no or 'ah-ah' and then direct their biting to a proper chew or toy. Once they start to bite on the proper chew, praise and reward. 
      To redirect to a training session, put a treat near their nose and lure them away from whatever they are biting on. Put them into a sit-stay and then reward and praise when they comply. Repeat every time biting occurs.''',


     '''Separation anxiety is triggered when dogs become upset because of separation from their guardians, the people they’re attached to. Give your dog a special treat each time you leave (like a puzzle toy stuffed with peanut butter). Only give them this treat when you're gone, and take it away when you get home.Make your comings and goings low-key without a lot of greeting. Ignore your pup for the first few minutes after you get home.Leave some recently worn clothes out that smell like you.Consider giving your pet over-the-counter natural calming supplements. Make sure your pet gets lots of exercise every day. A tired, happy dog will be less stressed when you leave. It's also key that you challenge your pet's mind. Play training games and fetch. Use interactive puzzles. Work their mind as well as their body. 
     That will keep them busy, happy, and too tired to be anxious while you're gone.''',


   '''Whether you want to be proactive about leash walking or you're struggling with leash walking, this is for you! 
Before training, it is critical that you let your dog play and exercise before working on something unnatural, like leash walking.When training leash manners, start inside and slowly work your way outside and then eventually to real walks on the leash.With your dog on leash, warm your dog up by working on a couple look at me's, sits, stays, etc.. Make sure you can get their attention. Start walking and as the leash is loose, reward. If your dog starts to pull, stop walking. Get their attention to come back to you and reward when they do. Change directions frequently, keep your dog guessing. Remember to frequently reward loose leash walking. If they start to pull, stop and change directions or redirect to a sit. Practice and repeat! You want to make sure your dog will follow you reliably without tension on the leash before moving on!
'''];


   return Scaffold(
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
       body:

       Column(
         children: [
           Container(
             alignment: Alignment.topLeft,
             margin: EdgeInsets.only(left: 15.0,top: 22.0),
             child: Text(
               "Lets Start Training",
               style: TextStyle(fontSize: 20.0,fontWeight: FontWeight.w600),
             ),
           ),
           Container(
             alignment: Alignment.topLeft,
             margin: EdgeInsets.only(left: 15.0,bottom: 25.0),
             child: Row(
               children: [
                 Text(
                   'Your dog loves us   ',
                   style: TextStyle(fontSize: 12.0),
                 ),
                 Icon( Icons.arrow_forward, ),

             ],
             ),
           ),


           GridView.count(
             shrinkWrap: true,
             crossAxisCount: 2, // number of columns
             children: List.generate(6, (index) {
               return GestureDetector(
                 onTap: () {
                   Navigator.push(
                     context,
                     MaterialPageRoute(
                       builder: (context) => DetailsPage1(index: index, friendNames: friendNames, description: description),
                           // DetailsPage(index: index, friendNames: friendNames),
                     ),
                   );
                 },
                 child: Card(
                   elevation: 3.0, // add a soft shadow to the card
                   shape: RoundedRectangleBorder(
                     borderRadius: BorderRadius.circular(10.0), // make the corners smooth
                   ),
                   child: Column(
                     children: [
                       Expanded(
                         child: Container(
                           margin: EdgeInsets.all(8.0),
                           color: Color((Random().nextDouble() * 0xFFFFFF).toInt() << 0).withOpacity(0.2),
                           // generate a random color using the Random() class
                           child: Center(
                             child: Image.asset(
                               'assets/images/image_${index + 1}.png', // replace with your image path
                               fit: BoxFit.cover, // adjust the image fit to your liking
                             ),
                           ),
                         ),
                       ),
                       Container(
                         margin: EdgeInsets.symmetric(vertical: 8.0),
                         child: Text(
                           ' ${friendNames[index]}',
                           textAlign: TextAlign.center,
                           style: TextStyle(
                             fontSize: 16.0,
                             fontWeight: FontWeight.bold,
                           ),
                         ),
                       ),
                     ],
                   ),
                 ),
               );
             }),
           ),


         ],
       )

   ,
   );
  }
}