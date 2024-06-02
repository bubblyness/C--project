// using System;

// namespace IntegerLiterals
// {
//     class MainApp
//     {
//         static void Main(string[] args)
//         // {
//         //     byte a = 240;
//         //     Console.WriteLine($"a={a}");

//         //     byte b = 0b1111_0000;
//         //     Console.WriteLine($"b={b}");

//         //     byte c = 0XF0;
//         //     Console.WriteLine($"c={c}");

//         //     uint d = 0x1234_abcd;
//         //     Console.WriteLine($"d={d}");
//         // }
//         // {
//         //     sbyte a = -10;
//         //     byte b = 40;
//         //     Console.WriteLine($"a={a}, b={b}");

//         //     short c = -30000;
//         //     ushort d = 60000;
//         //     Console.WriteLine($"c={c}, d={d}");

//         //     int e = -1000_000;
//         //     uint f = 3_0000_0000;
//         //     Console.WriteLine($"e={e}, f={f}");

//         //     long g = -5000_0000_0000;
//         //     ulong h = 200_0000_0000_0000_0000;
//         //     Console.WriteLine($"g={g}, h={h}");
//         // }
//         // {
//         //     byte a = 240; // decimal literal
//         //     Console.WriteLine($"a={a}");

//         //     byte b = 0b1111_0000; // binary literal
//         //     Console.WriteLine($"b={b}");

//         //     byte c = 0XF0; // hexadecimal literal
//         //     Console.WriteLine($"c={c}");

//         //     uint d = 0x1234_abcd; //hexadecimal literal
//         //     Console.WriteLine($"d={d}");
//         // }


// }
// }

using System.Net.WebSockets;
using Microsoft.VisualBasic;

// var names = new List<string> { "Jiwon", "Bori", "Katarina" };
var numbers = new List<int> { 45, 56, 99, 48, 67, 78 };
// names.Add("Amelia"); // LIST<T>
// names.Add("Eleanor"); 

// names = [.. names, "Bobae"];

// names.Sort(); 
Console.WriteLine($"I found 99 at index {numbers.IndexOf(99)}");
numbers.Sort();
Console.WriteLine($"I found 99 at index {numbers.IndexOf(99)}");

// foreach (var number in numbers)
// {
//     Console.WriteLine($"{number}");
// }



// foreach (var name in names[2..4]) // including [2] and excluding [4]
// {
//     Console.WriteLine($"Hey {name.ToUpper()}");
// }

// Console.WriteLine(names[0]);
// Console.WriteLine(names[^1]); // latest syntax of getting the last element in an array

// * enumeration: an enumeration is a complete, ordered listing o fall the items in a collection. Commonly used in computer science to refer to a listing of all the elements of a set. 
// Can't change the length/size of an array once it's been fixed/decided in length. You can copy and make a copied version of the old array. 
// You can default to lists for most of your operations not arrays. 