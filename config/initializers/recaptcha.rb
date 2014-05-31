Recaptcha.configure do |config|
  config.public_key  = ENV['recaptcha_public_key']
  config.private_key = ENV['recaptcha_private_key']
end