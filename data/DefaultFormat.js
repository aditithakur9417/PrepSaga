export const DefaultFormat = {
  info: [
    {
      title: "JavaScript (Node.js 12.14.0)",
      syntax:
        `/* code below */\n
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf8').trim().split(` +
        JSON.stringify("\n") +
        ")" +
        `\n    let currentline = 0;\n
    function readline(){
      return input[currentline++];
    }
    /*Take input*/ 
    let str = readline();
        
    /*Return output*/
    console.log(str);
        `,
    },
    {
      title: "Assembly (NASM 2.14.02)",
      syntax: `\nsection	.text
      global main         ;must be declared for using gcc
  
  main:	                ;tell linker entry point
  
    mov	edx, len	    ;message length
    mov	ecx, msg	    ;message to write
    mov	ebx, 1	        ;file descriptor (stdout)
    mov	eax, 4	        ;system call number (sys_write)
    int	0x80	        ;call kernel
  
    mov	eax, 1	        ;system call number (sys_exit)
    int	0x80	        ;call kernel
  
  section	.data
  
  msg	db	'Hello, world!',0xa	;our dear string
  len	equ	$ - msg			;length of our dear string
        `,
    },
    {
      title: "Bash (5.0.0)",
      syntax: `/* cook your code below */`
    },
    {
      title: "C (GCC 8.3.0)",
      syntax: `#include <stdio.h> 

      int main() {
        // Read the number of test cases.
        int T;
        scanf("%d", &T);
        while (T--) {
          // Read the input a, b
          int a, b;
          scanf("%d %d", &a, &b);
      
          // Compute the ans.
          int ans;
          printf(${JSON.stringify("%d\n")}, ans);
        }
      
        return 0;
      }`
    },
    {
      title: "C++ (GCC 8.3.0)",
      syntax: `#include <iostream>
      #include <bits/stdc++.h>
      using namespace std;
      
      int main() 
      {
        // Read the number of test cases.
         int t;
         cin>>t;
         int a,b;
         while(t--){
          int sum=0;
          // Read the input a, b
          cin>>a>>b;

          // Compute the ans.
          sum=a+b;
          cout<<sum<<${JSON.stringify("\n")};
         }
         return 0;
      }`
    },
    {
      title: "C (GCC 9.2.0)",
      syntax: `#include <stdio.h> 

      int main() {
        // Read the number of test cases.
        int T;
        scanf("%d", &T);
        while (T--) {
          // Read the input a, b
          int a, b;
          scanf("%d %d", &a, &b);
      
          // Compute the ans.
          int ans;
          printf(${JSON.stringify("%d\n")}, ans);
        }
      
        return 0;
      }`
    },
    {
      title: "C++ (GCC 9.2.0)",
      syntax: `#include <iostream>
      #include <bits/stdc++.h>
      using namespace std;
      
      int main() 
      {
        // Read the number of test cases.
         int t;
         cin>>t;
         int a,b;
         while(t--){
          int sum=0;
          // Read the input a, b
          cin>>a>>b;

          // Compute the ans.
          sum=a+b;
          cout<<sum<<${JSON.stringify("\n")};
         }
         return 0;
      }`
    },
    {
      title: "Clojure (1.10.1)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "C# (Mono 6.6.0.161)",
      syntax: `using System;

      public class Test
      {
        public static void Main()
        {
            int T = int.Parse(Console.ReadLine());
          for (int i = 0; i < T; i++)
          {
              string[] lines = Console.ReadLine().Split(' ');
              Console.WriteLine(int.Parse(lines[0])+int.Parse(lines[1]));
          }
        }
      }`
    },
    {
      title: "COBOL (GnuCOBOL 2.2)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "D (DMD 2.089.1)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "F# (.NET Core SDK 3.1.202)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "Fortran (GFortran 9.2.0)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "Go (1.13.5)",
      syntax: `package main

      import (
          "fmt"
      )
      
      func main() {
          var t, a, b int
          fmt.Scanf("%d", &t)
          
          for i := 0; i < t; i++ {
              fmt.Scanf("%d%d", &a, &b)
              fmt.Println(a+b)
          }
      }`
    },
    {
      title: "Haskell (GHC 8.8.1)",
      syntax: `import qualified Data.ByteString.Char8 as B
      import Data.Maybe
      
      solve = B.pack . show . sum . map (fst . fromJust . B.readInt) . B.words
      
      main = B.interact $ B.unlines . map solve . tail . B.lines`
    },
    {
      title: "Java (OpenJDK 13.0.1)",
      syntax: `
      import java.io.OutputStream;
      import java.io.IOException;
      import java.io.InputStream;
      import java.io.PrintWriter;
      import java.util.StringTokenizer;
      import java.io.IOException;
      import java.io.BufferedReader;
      import java.io.InputStreamReader;
      import java.io.InputStream;
      
      
      // Remember that the class name should be "Main" and should be "public".
      public class Main {
        public static void main(String[] args) {
          // System.in and System.out are input and output streams, respectively.
          InputStream inputStream = System.in;
      
          InputReader in = new InputReader(inputStream);
      
          // Read the number of test casese.		
          int T = in.nextInt();
          while (T-- > 0) {
            // Read the numbers a and b.
            int a = in.nextInt();
            int b = in.nextInt();
            
            // Compute the sum of a and b.
            int ans = a + b;
            System.out.println(ans);
          }
        }
      
        static class InputReader {
          public BufferedReader reader;
          public StringTokenizer tokenizer;
      
          public InputReader(InputStream stream) {
            reader = new BufferedReader(new InputStreamReader(stream), 32768);
            tokenizer = null;
          }
      
          public String next() {
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
              try {
                  tokenizer = new StringTokenizer(reader.readLine());
              } catch (IOException e) {
                  throw new RuntimeException(e);
              }
            }
            return tokenizer.nextToken();
          }
      
          public int nextInt() {
            return Integer.parseInt(next());
          }
        }
      }`
    },
    {
      title: "Kotlin (1.3.70)",
      syntax: `import java.util.Scanner

      fun main(args: Array<String>) {
          val reader = Scanner(System.${`in`})
          val t = reader.nextInt()
          for(i in 1..t) {
              val a = reader.nextInt()
              val b = reader.nextInt()
              println(a + b)
          }
      }`
    },
    {
      title: "Lua (5.3.5)",
      syntax: `local t = tonumber(io.read())

      for _ = 1, t do
          local a, b = io.read("*number", "*number")
          print(a + b)
      end`
    },
    {
      title: "Pascal (FPC 3.0.4)",
      syntax: `Var t,i,a,b:Longint;
      Begin
         Readln(t);
         For i:=1 to t do
            Begin
               Readln(a,b);
               Writeln(a+b);
            End;
      End.`
    },
    {
      title: "Perl (5.28.1)",
      syntax: `use strict;
      use warnings;
      
      my $t = <>;
      chomp($t);
      while ($t-->0) {
              my $inp = <>;
              chomp($inp);
              my @elements = split(" ", $inp);
              print ($elements[0] + $elements[1], "\n");
      }`
    },
    {
      title: "PHP (7.4.1)",
      syntax: `<?php

      fscanf(STDIN, "%d", $t);
      while($t--){
          fscanf(STDIN, "%d %d", $a, $b);
          print ($a + $b) . "\n";
      }
  ?>
  `
    },
    {
      title: "Prolog (GNU Prolog 1.4.5)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "Python (3.8.1)",
      syntax: `#Read the number of test cases.
      T = int(raw_input())
      for tc in range(T):
        # Read integers a and b.
        (a, b) = map(int, raw_input().split(' '))
        
        ans = a + b
        print(ans)`
    },
    {
      title: "R (4.0.0)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "Ruby (2.7.0)",
      syntax: `t=gets.to_i 
      while t!=0 
          t-=1 
          x=gets.chomp 
          a,b=x.split(' ').map(&:to_i)
          c=a+b
          puts c
      end`
    },
    {
      title: "Rust (1.40.0)",
      syntax: `use std::io;

      fn main() {
          let mut line = String::new();
          io::stdin().read_line(&mut line).expect("Failed to read line");
          let n: i32 = line.trim().parse().expect("Failed to parse n as int");
      
          for _i in 1..n+1 {
              line.clear();
              io::stdin().read_line(&mut line).expect("Failed to read line");
              let inputs: Vec<i32> = line.trim().split(" ")
                  .map(|x| x.parse().expect("Failed to parse line as int: a, b"))
                  .collect();
              println!("{}", inputs[0]+inputs[1]);
          }
      }`
    },
    {
      title: "Scala (2.13.2)",
      syntax: `object Main extends App {
        val T = readInt
        
        var i = 0
        while(i < T) {
            val Array(a,b) = readLine.split(" ").map(_.toInt)
            println(a+b)
            i = i+1
        }
    }`
    },
    {
      title: "SQL (SQLite 3.27.2)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    },
    {
      title: "Swift (5.2.3)",
      syntax: `No template exists for this language. Erase this and please write full code.`
    }
  ],
};
