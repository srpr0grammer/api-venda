import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";


export default class ListUserService {

    //metodo para listar usuarios
    public async listUser(): Promise<User[]> {

        const userRepo = getCustomRepository(UserRepository);
  
        //buscando todos os usuarios
        const listUser = userRepo.find()
        

        //retorna a lista dos usuarios.
        return listUser;
    }
}

