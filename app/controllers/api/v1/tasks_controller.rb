module Api
  module V1
    class TasksController < ApplicationController

      def index
        render json: Task.all
      end

      def show
        render json: Task.find(params[:id])
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json:task
        else
          render json: {status: 500, err: 'Task could not be saved.'}
        end
      end

      def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task
      end

      def destroy
        task = Task.find(params[:id])
        task.destroy
        render json: {message: "Successfully deleted!"}, status: 200
      end

      private
        def task_params
          params.require(:task).permit(:title, :duedate, :description, category_ids => [])
        end

    end
  end
end