import mongoose from 'mongoose';
import slugify from 'slugify';
let productSchema= new mongoose.Schema({
    productName:{type:String,required:true},
    slug:String,
    finalPrice:{type:Number,required:true},
    cloudinary_id:String,
    cloudinary_url:String,
   priceAfterDiscount:Number,
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true
    },
    stock:Number,
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:"User",
      required:true
    },
    discount:{
      type:Number,
      default:0
    },
    isCouponApplied:{
      type:Boolean,
      default:false
    }
    
},{timestamps:true});
productSchema.pre('save', function(next) {
  this.slug = slugify(this.productName, { lower: true });
  this.priceAfterDiscount= this.finalPrice*(1-this.discount/100);
  next();
});
  const  productModel= mongoose.model('Product',productSchema);
  export default productModel;