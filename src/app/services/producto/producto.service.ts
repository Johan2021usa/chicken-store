import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
// Importing environment variables, necessary to define the sensitive information
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,

      // additional
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  }

  async getAllProductsFun(){
    let { data, error } = await this.supabase
    .rpc('getAllProductsFun')
    if (error) console.error(error)
    else console.log(data)
  }

  async getProductById(idproductarg: any){
    let { data, error } = await this.supabase
    .rpc('getProductById', {idproductarg}
    )
    if (error) console.error(error)
    else console.log(data)
    return {data, error};
  }

  async getAllProducts(){
    let { data: product, error } = await this.supabase
    .from('product')
    .select('*')
    return {product, error}
  }

  // async submitContactForm(formData: any) {
  //   try {
  //     const { data, error } = await this.supabase
  //       .from('contact_forms')
  //       .insert([formData]);

  //     if (error) {
  //       throw error;
  //     }
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
