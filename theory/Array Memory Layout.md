# Array Memory Layout: Logical vs Physical Address

## 1. Introduction  
- Array ek linear data structure hai jisme elements contiguous memory locations mein store hote hain.  
- Indexing se kisi bhi element ko constant time O(1) mein access kiya ja sakta hai (low-level languages mein).  
- Ye file explain karegi _logical address_ aur _physical address_ ka difference, memory layout ka concept, aur ek example.

---

## 2. Key Concepts  
### 2.1 Logical Address  
- Wo address jo program ya compiler ka perspective se hota hai — jisse hum “soch rahe hain” element ka location hai.  
- Example formula:  
```
Address(arr[i]) = Base + i * SizeOfElement
```

- Ye OS ke virtual memory layer se map ho sakta hai physical memory mein.

### 2.2 Physical Address  
- Wo actual address hai RAM ya physical memory mein.  
- OS/Hardware (MMU) logical/virtual addresses ko physical addresses mein translate karti hai.  
- User-program usually directly physical address nahi dekhta.

### 2.3 Why Contiguous Memory Matters  
- Array ka memory contiguous hone se indexing fast hoti hai (direct formula se).  
- Agar memory fragmented ho ya elements scattered, indexing cost barh sakti hai.

---

## 3. Memory Layout Example  
Maan lo:  
- `Base` address = `1000` (logical base)  
- `SizeOfElement` = `4` bytes  
- Array: `arr = [10, 20, 30, 40, 50]`

| Index (i) | Value | Logical Address |
|-----------|--------|-----------------|
| 0 | 10 | `1000 + 0*4 = 1000` |
| 1 | 20 | `1000 + 1*4 = 1004` |
| 2 | 30 | `1000 + 2*4 = 1008` |
| 3 | 40 | `1000 + 3*4 = 1012` |
| 4 | 50 | `1000 + 4*4 = 1016` |

> *Note:* Ye addresses purely logical/analogy hain; actual physical memory addresses alag ho sakte hain depending on system.

---

## 4. JavaScript Analogy  
```js
const arr = [10, 20, 30, 40, 50];
// Logical analogy:
const baseAddress = 1000;
const sizeOfElement = 4; // bytes — analogy
for (let i = 0; i < arr.length; i++) {
console.log(
  `Element arr[${i}] = ${arr[i]}, Logical Address = ${baseAddress + i * sizeOfElement}`
);
}

5. Important Notes

JavaScript arrays engine-specific implementation use karte hain; hum “logical address” ka model simplification ke liye use karte hain.

Low-level languages (C, C++) mein arrays ka exact memory layout aur address calculation relevant hota hai.

Ye concept DSA ke saath saath systems programming, memory management aur performance optimisation mein bhi useful hai.

6. Summary

Array ka base address + index × size formula logical address calculation ka base hai.

Logical vs physical address ka difference samajhna important hai, especially jab performance, pointer arithmetic ya low-level languages ka kaam karte ho.

Ye knowledge foundation banati hai for efficient data structure design aur algorithm analysis.

```

