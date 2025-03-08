//try catch
try {
    const result = 1 / 0;
    console.log(result.name.result);
} catch (error) {
    console.log('error', error);
} finally {
    console.log('finally action');
}