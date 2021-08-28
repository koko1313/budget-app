CREATE TABLE budget (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    income DECIMAL(8, 2),
    amountLeft DECIMAL(8, 2),
    date DATETIME
);

CREATE TABLE expense (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    expenseName VARCHAR(255),
    expenseAmount DECIMAL(8, 2),
    date DATETIME
);