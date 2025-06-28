class ItemsController < ApplicationController
    # GET /items
    def index
        @items = Item.all
        render json: @items
    end

    # GET /items/:id
    def show
        @item = Item.find(params[:id])
        render json: @item
    end
    
    # POST /item
    def create
        @item = Item.new(item_params)
        if @item.save
            render json: @item, status: :created
        else
            render json: @item.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /items/:id
    def update
        @item = Item.find(params[:id])
        if @item.update(item_params)
            render json: @item
        else
            render json: @item.errors, status: :unprocessable_entity
        end
    end

    # DELETE /item/:id
    def destroy
        @item = Item.find(params[:id])
        @item.destroy
        head :no__content
    end

    private

    def item_params
        params.require(:item).permit(:name, :description)
    end
end