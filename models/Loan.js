import mongoose from 'mongoose';

const loanSchema= new mongoose.Schema({
    principle:{
        type:Number,
        required:[true,'Please provide principle'],
    },
    interestRate:{
        type:Number,
        required:[true,'Please provide the interest rates'],
        default:5
    },
    repaymentSchedule:{
        type:'String',
        required:true,
        enum:['6 months','1 year','2 years','3 years']
    },
    status:{
        type:String,
        default:'pending',
        enum:['completed','rejected','active','pending','defaulted']
    },
    client_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'client'
    },
    mfi_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'user'
    },
    client_nin:{
        type:String,
        required:[true,'kindly provide the national identity card number.'],
    }
},{timestamps:true})


export default mongoose.model('Loan',loanSchema);