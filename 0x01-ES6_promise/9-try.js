// this is a module tht defines a guardrail function

export default function guardrail(mathFunction) {
  const queue = [];
  let argResult;

  try {
    argResult = mathFunction();
    queue.push(argResult, 'Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardrail was processed');
  }

  return queue;
}
