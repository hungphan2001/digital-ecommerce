import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
    "product/get",
    async(thunkAPI)=>{
    try{
      return await productService.getProducts();
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
});

export const getAProduct = createAsyncThunk(
    "product/getAProduct",
    async(id,thunkAPI)=>{
    try{
      return await productService.getProduct(id);
    }catch(error){
      return thunkAPI.rejectWithValue(error);
    }
});

export const addToWishlist = createAsyncThunk(
    "product/wishlist",
    async(proId,thunkAPI)=>{
    try{
      return await productService.addToWishlist(proId);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
});

export const addRating = createAsyncThunk(
    "product/rating",
    async(data,thunkAPI)=>{
    try{
      return await productService.rateProduct(data);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
});


const productState ={
    product: "",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
};

export const productSlice = createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(addToWishlist.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addToWishlist.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message = "Product Added To Wishlist";
        }).addCase(addToWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message= action.error;
        }).addCase(getAProduct.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
        }).addCase(getAProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message= action.error;
        }).addCase(addRating.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addRating.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.rating = action.payload;
            state.message ="Rating Added Successfully!"
            if(state.isSuccess){
                toast.success("Rating Added Successfully")
            }
        }).addCase(addRating.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message= action.error;
            if(state.isError){
                toast.error("Rating Have Problem")
            }
        });
        
    }
})

export default productSlice.reducer;