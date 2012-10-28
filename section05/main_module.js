if (require.main === module) {
  console.log("main module");
  console.log("require main " + require.main);
  console.log("now module " + module);
} else {
  console.log("child module");
  console.log("require main " + require.main);
  console.log("now module " + module);
}


