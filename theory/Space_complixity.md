# Input Space vs Auxiliary Space (Simple Explanation)

## 1. Input Space

Input space is the memory taken by the data you give to the algorithm.

### Example:

``` js
const arr = [1, 2, 3, 4, 5]; // 5 elements
```

-   This array needs space for **5 elements**
-   So input space = **O(n)**

------------------------------------------------------------------------

## 2. Auxiliary Space

Auxiliary space is the **extra space** an algorithm uses internally
(temporary variables, temp arrays, etc.)

### Example:

``` js
let sum = 0; // 1 variable
let i = 0;   // 1 variable
```

-   Only 2 variables → constant memory\
-   So auxiliary space = **O(1)**

------------------------------------------------------------------------

## 3. Total Space = Input + Auxiliary

Example values: - Input array = 10 elements → Input Space = **10
units** - Extra variables = 2 → Auxiliary Space = **2 units**

Total = 10 + 2 = **12 units** → O(n)

👉 Big-O notation constants ignore karta hai\
So:

    O(n) + O(1) = O(n)

------------------------------------------------------------------------

## Code Example for Understanding

### Example 1: O(1) Auxiliary Space

``` js
function sumArray(arr) {
  let sum = 0;     // O(1)
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

-   Only 2 extra variables (sum, i)
-   Auxiliary space = **O(1)**

------------------------------------------------------------------------

### Example 2: O(n) Auxiliary Space (Map)

``` js
const result = arr.map(x => x * 2);
```

-   Creates a **new array**
-   New array size = n
-   Auxiliary space = **O(n)**

------------------------------------------------------------------------

## Summary Table

  ---------------------------------------------------------------------
  Concept         Meaning           Example           Big-O
  --------------- ----------------- ----------------- -----------------
  Input Space     Memory taken by   arr of size n     O(n)
                  given data                          

  Auxiliary Space Extra memory used 2 variables       O(1)
                  by algorithm                        

  Total Space     Input + extra     n + 2 → n         O(n)
                  space                               
  ---------------------------------------------------------------------

------------------------------------------------------------------------

## Final Notes

-   Input space **does NOT count** in space complexity (interview rule)
-   Only auxiliary space matters\
-   Map/filter → O(n)\
-   Reduce → O(1)

------------------------------------------------------------------------

# 🏠 Real-Life Example: Input Space vs Auxiliary Space

## 🎒 Example: School Bag & Notebook

Imagine you are going to school.

### 👜 1. Input Space = Things you bring

-   Books (Math, Science, English)
-   Notebook
-   Lunch box

These items **already exist** and you simply bring them.\
This is your **input space** --- just like an array given to an
algorithm.

📌 Chahe 3 books lo ya 10 books → input tum already lekar aaye ho.\
Algorithm (teacher) ko fark nahi padta.

------------------------------------------------------------------------

### ✏️ 2. Auxiliary Space = Extra items you use during class

During class, you use: - 1 pen\
- 1 pencil\
- 1 eraser

These are small extra items you use to **process** your input (books).

Ye **auxiliary space** hai.

✔️ Kitne bags laaye? Doesn't matter.\
✔️ Class me extra space hamesha **same** rahegi → pen + pencil + eraser
→ constant → **O(1)**

------------------------------------------------------------------------

### 📘 Summary (Real Life)

  Real Life            Meaning               Big-O
  -------------------- --------------------- -------
  Books you bring      Input space           O(n)
  Pen/pencil you use   Auxiliary space       O(1)
  Total items used     Books + small tools   O(n)

Just like arrays: - You bring array → input - Algorithm uses few
variables → extra space → O(1)

------------------------------------------------------------------------
