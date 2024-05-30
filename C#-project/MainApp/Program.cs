using System;

namespace IntegerLiterals
{
    class MainApp
    {
        static void Main(string[] args)
        // {
        //     byte a = 240;
        //     Console.WriteLine($"a={a}");

        //     byte b = 0b1111_0000;
        //     Console.WriteLine($"b={b}");

        //     byte c = 0XF0;
        //     Console.WriteLine($"c={c}");

        //     uint d = 0x1234_abcd;
        //     Console.WriteLine($"d={d}");
        // }
        // {
        //     sbyte a = -10;
        //     byte b = 40;
        //     Console.WriteLine($"a={a}, b={b}");

        //     short c = -30000;
        //     ushort d = 60000;
        //     Console.WriteLine($"c={c}, d={d}");

        //     int e = -1000_000;
        //     uint f = 3_0000_0000;
        //     Console.WriteLine($"e={e}, f={f}");

        //     long g = -5000_0000_0000;
        //     ulong h = 200_0000_0000_0000_0000;
        //     Console.WriteLine($"g={g}, h={h}");
        // }
        {
            byte a = 240;
            Console.WriteLine($"a={a}");

            byte b = 0b111_0000;
            Console.WriteLine($"b={b}");

            byte c = 0XF0;
            Console.WriteLine($"c={c}");

            uint d = 0x1234_abcd;
            Console.WriteLine($"d={d}");
        }
    }
}