
Pagination vs Infinite scroll
Frontend Pagination
offset Pagination
Cursor Pagination



Frontend Pagination:   

1. [1,2,3,4,--------] - Browser level
2. Fetch all the data at once

Pros and Cons

1. Faster page navigation
2. less API call (1 API call)
3. easy to implement
4. map, filter and reduce for all data

Cons:
Initial load of the page is high
browser heavy
Can be very slow(Page)


Server Side Pagination

1. API level
2. Fetch data per page

Pros 
1. Works good on large data
2. Initial load time of the page is fast

Cons
1. Large no. of API call
2. Sorting,searching,map, filter reduce we will in backed
3. tricker than Frontend Pagination
4. Backend dependency


Paginated API:
total : 100
1. Paginated API with offset and limit:
Offset/skip : 10
limit/count : 10 (11-21)

2.
offset/skip: 20
limit/count (next count ): 50 means (51-71) 

https://dummyjson.com/products?limit=10&skip=10&select=title,price


{
  "products": [
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "price": 1899.99
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "price": 2499.99
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "price": 299.99
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "price": 499.99
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "price": 799.99
    },
    {
      "id": 16,
      "title": "Apple",
      "price": 1.99
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "price": 12.99
    },
    {
      "id": 18,
      "title": "Cat Food",
      "price": 8.99
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "price": 9.99
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "price": 4.99
    }
  ],
  "total": 194,
  "skip": 10,
  "limit": 10
}


what is the problem with offset Pagination:

suppose we have Pages with some entries (En-1 & En-2)

we can see the duplicate data in en-2, this problem overcome by cursor Pagination

(Ctrl+alt+ arrow up and down)

     En-1  En-2
Page 1: x    t
        y    u
        z    x
        d    y

Offset: 0
Limit:  4

Page 2: j    z
        k    d
        w    j
        z    k

Offset: 4
Limit:  4

Page 3: k    w
        l    z
        n    k
        o    l

Offset: 8
Limit:  4

Cursor Pagination - this approach suggested by facebook

Cursor Pagination:

- Read real time data (dynamic)
- No skipped/missing entries
- faster than offset Pagination

How will it work?
suppose we have table of 16 rows in the table

Cursor Pagination:

cursor (unique) = >  7
         limit =>    4
         so it will read the data from 7 to next 4 

Pros:
- No data is skipped/duplicate
- faster than offset pagination
- Real Time data (Dynamic)
- All social media uses the Cursor Pointer

Cons: 
- CP tied with Infinite Scroll
- It does not keep track of the pages
- Sort

🔹 Offset Pagination - O(n) : like a LinkedList
/api/items?page=2&limit=10
✔ Easy to implement
✔ Works well for tables
❌ Slower with large data
❌ Can cause inconsistent results

🔹 Cursor Pagination O(1): like a Array
/api/items?cursor=abc123
✔ Faster & scalable
✔ Perfect for infinite scroll
✔ Handles live data better
❌ No direct page jumping

💡 Frontend takeaway:
Offset → replace data
Cursor → append data

Cursor-based pagination is superior for large, real-time datasets (like infinite feeds) because it offers consistent, fast performance () by using pointers to skip data, avoiding duplicates if new entries appear. Conversely, Offset pagination is simpler, allows jumping to specific pages (like page 5), but suffers from significant performance degradation on large datasets and data inconsistencies. 

Key Differences:
Performance: Cursor-based uses indexes to jump directly to data; Offset-based scans all previous rows,
 causing slowness () as the page number increases.

Data Consistency: Cursors are immune to data insertions/deletions. Offset-based can show duplicate or skipped items if items are added/removed while navigating.

Use Cases: Use Cursors for high-performance, real-time lists, or infinite scroll. Use Offset for small datasets or applications requiring random access (e.g., jump to page 10). 

Performance Comparison Table
| Feature | Offset Pagination | Cursor Pagination |
| :--- | :--- | :--- |
| Speed (Large Data) | Slows down as pages increase | Consistently fast |
| Data Integrity | Prone to skipped/duplicate items | Stable against data changes |
| Random Access | Easy (go to page 50) | No, sequential only (next/prev) |
| Complexity | Simple | Complex | 

When to use which:
Use Cursor Based: If you have millions of records, infinite scroll, or high-velocity data, use a Cursor-based approach.

Use Offset Based: If you need to jump to specific pages, have small datasets, or need to quickly implement pagination, Offset-based pagination is suitable