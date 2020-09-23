class Find
  def initialize(string)
    @string = string
  end

  def find_and_replace(word, replacement)
    
    @string.gsub!(word, replacement)
    return @string
  end
end

# string = "hello world"
# string.gsub!("world", "universe")

# my Cat at the cathedral 
# my dog at the doghedral 

# my Dog at the doghedral
