import mysql2 from "mysql2"

const ConnectionDataBase =()=>{
     return mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"store_db"
})}
const db=ConnectionDataBase()
db.connect((err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log("dataBase connection")
    }
})

// q1
// db.query(`
// CREATE TABLE Suppliers (
//   SupplierID INT AUTO_INCREMENT PRIMARY KEY,
//   SupplierName VARCHAR(255),
//   ContactNumber VARCHAR(255)
// )
// `);

// db.query(`
// CREATE TABLE Products (
//   ProductID INT AUTO_INCREMENT PRIMARY KEY,
//   ProductName VARCHAR(255),
//   Price DECIMAL(10,2),
//   StockQuantity INT,
//   SupplierID INT,
//   FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
// )
// `);

// db.query(`
// CREATE TABLE Sales (
//   SaleID INT AUTO_INCREMENT PRIMARY KEY,
//   ProductID INT,
//   QuantitySold INT,
//   SaleDate DATE,
//   FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// )
// `);
// q2

// db.query(`alter table Products add category varchar(255)`)
//q3
// db.query(`alter table Products DROP COLUMN category`)
// //  q4
// db.query('alter table suppliers modify ContactNumber varchar(15)',(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Change “ContactNumber” column in Suppliers to VARCHAR (15).");
        
//     }
// })
// q5
// db.query('alter table products modify productname varchar(255) NOT NULL',(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Add a NOT NULL constraint to ProductName.");
        
//     }
// })
// q6 (a)
// db.query(`insert into suppliers (suppliername,ContactNumber) values ('FreshFoods','01001234567')`,(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Supplier added successfully");
        
//     }
// })
// q6 (b)
// db.query(`insert into products (productname,price,stockquantity,supplierid) values('Milk', 15.00, 50, 1),
// ('Bread', 10.00, 30, 1),
// ('Eggs', 20.00, 40, 1)`,(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("products added successfully");
        
//     }
// })
// q6 (c)
// db.query(`insert into sales(productid,quantitysold,saledate) value (1,2,2025-05-20)`,(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("sale added successfully");
        
//     }
// })
// q7
// db.query(`update products set price =25.00 where productname= 'Milk' `,(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Update the price of 'Bread' to 25.00.successfully");
        
//     }
// })
// q8
// db.query(`delete from products where productname= 'Edggs' `,(err,result)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Delete the product 'Eggs'.successfully");
        
//     }
// })
// q9
// db.query(`
// SELECT p.productname, SUM(s.quantitysold) AS TotalSold FROM products p
// JOIN sales s ON p.productid = s.productid
// GROUP BY p.productname
// `, (err, result) => {
//   console.log(result);
// });
// q10
// db.query(`
// SELECT * FROM Products
// ORDER BY StockQuantity DESC
// LIMIT 1
// `, (err, result) => {
//   console.log(result);
// });
// })
// q11
// db.query(`select * from suppliers where suppliername like 'F%' `,(err,result)=>{
// if (err) {
//     console.log(err);
    
// } else {
//     console.log(result);
    
// }
// })
// q12
// db.query(`select * from products p 
//     left join sales s on p.productid=s.productid where s.productid is null
//     `,(err,result)=>{
//     if (err) {
//     console.log(err);
    
// } else {
//     console.log(result);
    
    
// }})
// q13
// db.query(`select s.saledate ,p.productname from sales s
//      join products p on p.productid=s.productid  `,(err,result)=>{
// if (err) {
//     console.log(err);
    
// } else {
//     console.log(result);
    
// }
//      })

// q14 
// db.query(`create user 'store_manager'@'localhost' IDENTIFIED BY '123' `)
// db.query(`GRANT SELECT, INSERT, UPDATE ON store_db.* TO 'store_manager'@'localhost' `)
// q15
// db.query(`REVOKE UPDATE ON store_db.* FROM 'store_manager'@'localhost'`)
// q16
// db.query(`
// GRANT DELETE ON store_db.Sales TO 'store_manager'@'localhost'
// `);