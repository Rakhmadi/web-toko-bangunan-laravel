<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Prdk extends Migration
{
  /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        Schema::create('brand',function(Blueprint $table){
            $table->bigIncrements('id');
            $table->string('nama');
            $table->string('cat');
            $table->timestamps();
        });

        Schema::create('product', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama',100);
            $table->string('kode',20);
            $table->text('desc')->nullable();
            $table->text('foto');
            $table->integer('harga');
            $table->integer('stock');
            $table->bigInteger('id_brand')->unsigned();
            $table->timestamps();
            $table->foreign('id_brand')->references('id')->on('brand')->onDelete('cascade');
        });

        Schema::create('transaction_purchase', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('kode');
            $table->string('nama_supplier',90);
            $table->string('notlp',30);
            $table->string('email',30)->unique();
            $table->timestamps();
        });

        Schema::create('transaction_purchase_detail', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_purchase')->unsigned();
            $table->integer('qty');
            $table->bigInteger('id_product')->unsigned();
            $table->timestamps();
            $table->foreign('id_product')->references('id')->on('product')->onDelete('cascade');
            $table->foreign('id_purchase')->references('id')->on('transaction_purchase')->onDelete('cascade');
        });
        
        Schema::create('transaction_sales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('kode');
            $table->string('nama_planggan',100);
            $table->string('alamat',30);
            $table->string('email',30)->unique();
            $table->string('kurir')->nullable();
            $table->boolean('pengiriman')->default(0)->change();;
            $table->timestamps();
        });

        Schema::create('transaction_sales_detail', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_transaction')->unsigned();
            $table->bigInteger('id_product')->unsigned();
            $table->integer('quantity');
            $table->foreign('id_transaction')->references('id')->on('transaction_sales');
            $table->foreign('id_product')->references('id')->on('product');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brand','product');
    }
}
