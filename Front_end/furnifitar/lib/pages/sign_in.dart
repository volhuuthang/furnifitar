import 'package:flutter/material.dart';

class SignUp extends StatelessWidget {
  const SignUp ({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/sign_up.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          // Form aligned to bottom
          Column(
            // Căn form xuống dưới cùng
            mainAxisAlignment: MainAxisAlignment.end, 
            children: [
               const Padding(
                padding: EdgeInsets.only(bottom: 10),
                child: Column(
                  children: [
                    Text(
                      'Create Account',
                      style: TextStyle(
                        fontSize: 35,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF2B2321),
                      ),
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      'Please fill the input below here',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF2B2321),
                      ),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(height: 13),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.all(30),
                margin: const EdgeInsets.symmetric(horizontal: 0),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFFFF).withOpacity(1),
                  borderRadius: BorderRadius.circular(30),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const SizedBox(height: 5),
                    TextField(
                      decoration: InputDecoration(
                        hintText: 'Your name...',
                        labelStyle: const TextStyle(color: Color(0x89000000)),
                        filled: true,
                        fillColor: const Color(0xFFF2F2F7).withOpacity(0.9),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    TextField(
                      decoration: InputDecoration(
                        hintText: 'Email...',
                        labelStyle: const TextStyle(color: Colors.black54),
                        filled: true,
                        fillColor: const Color(0xFFF2F2F7).withOpacity(0.9),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    TextField(
                      obscureText: true,
                      decoration: InputDecoration(
                        hintText: 'Password',
                        labelStyle: const TextStyle(color: Colors.black54),
                        fillColor: const Color(0xFFF2F2F7).withOpacity(0.9),
                        filled: true,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    TextField(
                      obscureText: true,
                      decoration: InputDecoration(
                        hintText: 'Confirm Password',
                        labelStyle: const TextStyle(color: Colors.black54),
                        filled: true,
                        fillColor: const Color(0xFFF2F2F7).withOpacity(0.9),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide.none,
                        ),
                      ),
                    ),
                    const SizedBox(height: 30),
                    ElevatedButton(
                      onPressed: () {
                        // Sign up logic here
                      },
                      style: ElevatedButton.styleFrom(
                         minimumSize: const Size(400, 55),
                        backgroundColor: const Color(0xFF2B2321),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      
                      child: const Text(
                        'Sign up',
                      style: TextStyle(color: Colors.white),
                      ),
                    ),
                    const SizedBox(height: 20),
                    TextButton(
                      onPressed: () {
                        // Logic for log in
                      },
                      child: const Text(
                        'Already have Account? Log in',
                        style: TextStyle(color: Color(0xFF2B2321)),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
