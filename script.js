fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log("Variable 'a':", data.examples.variables.a);
        console.log("Variable 'user':", data.examples.variables.user);
        console.log("String with double quotes:", data.examples.variables.str1, typeof data.examples.variables.str1);
        console.log("String with single quotes:", data.examples.variables.str2, typeof data.examples.variables.str2);
        console.log("Template literal string:", data.examples.variables.str3, typeof data.examples.variables.str3);
        console.log("Number 1:", data.examples.variables.num1, typeof data.examples.variables.num1);
        console.log("Number 2:", data.examples.variables.num2, typeof data.examples.variables.num2);
        console.log("Boolean true:", data.examples.variables.bool1, typeof data.examples.variables.bool1);
        console.log("Boolean false:", data.examples.variables.bool2, typeof data.examples.variables.bool2);
        console.log("Null value:", data.examples.variables.nullValue, typeof data.examples.variables.nullValue);
        console.log("BigInt value:", data.examples.variables.bigint, "as BigInt cannot be directly stored in JSON");
    })
    .catch(error => console.error('Error fetching JSON:', error));