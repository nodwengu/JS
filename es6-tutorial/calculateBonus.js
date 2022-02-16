const allEmployees = (arr1, arr2) => {
   return [...arr1, ...arr2];
};

const addBonus = (employees) => {
   let totalSalary = 0;
   let totalBonus = 0;

   for (const item of employees) {
      let bonus = 0;

      if ( item.salary >= 15000 && Object.is(item.dept, "hr") ) {
         bonus = item.salary * (70/100);
         console.log("70% of ", item.salary, " is ", bonus);

         item.salary += bonus;
         totalSalary += item.salary;
         totalBonus += bonus;
         
      } else if ( item.salary < 15000 && Object.is(item.dept, "hr") ) {
         bonus = item.salary * (90/100);
         console.log("90% of ", item.salary, " is ", bonus);

         item.salary += + bonus;
         totalSalary += item.salary;
         totalBonus += bonus;
         
      } else if ( item.salary >= 20000 && Object.is(item.dept, "it") ) {
         bonus = item.salary * (50/100);
         console.log("50% of ", item.salary, " is ", bonus);

         item.salary += + bonus;
         totalSalary += item.salary;
         totalBonus += bonus;
         
      } else if ( item.salary < 20000 && Object.is(item.dept, "it") ) {
         bonus = item.salary * (90/100);
         console.log("90% of ", item.salary, " is ", bonus);

         item.salary += + bonus;
         totalSalary += item.salary;
         totalBonus += bonus;
         
      }

      //totalBonus = totalBonus + 
   }
   console.log("totalSalary: ", totalSalary);
   console.log("totalBonus: ", totalBonus);

}

const getBonusTotal = (employees) => {
   let total = 0;

   for (const item of employees) {
      if (item.salary >= 15000 && Object.is(item.dept, "hr")) {
         item.salary += 7000;
         total += item.salary;
      }
   }

}

const getSalaryTotal = (employees) => {
   for (const item of employees) {
      console.log("item: ", item);
   }

}