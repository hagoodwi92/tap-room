require('rspec')
require('find_and_replace')

describe("Find#find_and_replace") do
  
  it("return the string with replaced word") do
    word = Find.new('hello world')
    expect(word.find_and_replace("world", "universe")).to(eq("hello universe"))
  end

  it("replace all and partial matches with desired string, return string") do
    word = Find.new('I am walking my Cat to the cathedral')
    expect(word.find_and_replace(/cat/i, "dog")).to(eq("I am walking my dog to the doghedral"))
  end


end