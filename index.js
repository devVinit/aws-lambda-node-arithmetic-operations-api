export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const numberA = parseFloat(body.numberA);
    const numberB = parseFloat(body.numberB);

    // number validation
    if (isNaN(numberA) || isNaN(numberB)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid request body",
        }),
      };
    }

    const parts = event.resource.split("/");
    const operation = parts[parts.length - 1];

    let result;

    // operations based on arithmetic operators
    switch (operation) {
      case "add":
        result = numberA + numberB;
        break;
      case "subtract":
        result = numberA - numberB;
        break;
      case "multiply":
        result = numberA * numberB;
        break;
      case "divide":
        if (numberB !== 0) {
          result = numberA / numberB;
        } else {
          return {
            statusCode: 400,
            body: JSON.stringify({
              error: "Cannot divide by 0",
            }),
          };
        }
        break;
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Invalid Operation",
          }),
        };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
