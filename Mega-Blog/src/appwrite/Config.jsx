import conf from "../conf/Conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.apppwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.createRow({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                rowID: slug,
                data:{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        }
        catch(error)
        {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try{
            return await this.database.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId
                }

            )
        }
        catch(error){
            throw error
        }
    }    
    
        async deletePost(slug){
            try{
                return await this.database.deleteRow({
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    rowId: slug
                })
                return true
            }catch(error){
                    throw error
                    return false
            }
        }

        async  getPost(slug){
            try{
                return await this.database.getRow({
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    rowId: slug
                })
                return true
            }catch(error){
                throw error
                return false
            }
        }

        async getPosts(querries = [Query.equal("status","active")]){
            try{
                return await this.database.listRows({
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    queries: querries})
                    return true
            }catch(error){
                throw error
                return false
            }
        }

        // File Upload service

        async uploadFile(file){
            try{
                await this.bucket.createFile({
                    bucketId: conf.appwriteBucketId,
                    fileId: ID.unique(),
                    file:file,
                })
            }
            catch(error){
                throw error
                return false
            }
        }

        async deleteFile(fileId){
            try{
                await this.bucket.deleteFile({
                    bucketId: conf.appwriteBucketId,
                    fileId:fileId
                })
            }
            catch(error){
                throw error
                return false
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId:fileId
            })
        }
        


}

