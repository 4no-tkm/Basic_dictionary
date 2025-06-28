class GreetingsController < ApplicationController
  def index
    render json: { message: "Hello, Rails API from Practice Project!" }
  end
end
