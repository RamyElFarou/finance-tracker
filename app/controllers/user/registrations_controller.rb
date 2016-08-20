class User::RegistrationsController < Devise::RegistrationsController
  #submit will look for anything associated with this registration controller,
                                      #whatever it cannot find, it looks at parent devise/registration/controller
  before_filter :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name])
  end


end