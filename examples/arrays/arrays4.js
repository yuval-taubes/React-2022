/*
Tpyed arrays

typed arrays are like traditional JD arrays, except:
    -their entry values are always primitive numberic values
    -they are fixed length
    -they cannot have gaps in the middle
     
*/
// ..value range -128 to 127
const int8 = new Int8Array(3)
int8[0] = -3;
int8[1] = 127
int8[2] = 7

console.log(int8)

// value range -32768 to 32767
const int16 = new Int16Array(3)

int16[0] = -75
int16[1] = 2345
int16[2] = 12
