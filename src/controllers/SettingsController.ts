import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(req: Request, res: Response){

        const { chat, username } = req.body;

        const settingsServices = new SettingsService();

        try {

            const settings = await settingsServices.create({ chat, username });
      
            return res.json(settings);
            
        } catch (error) {

            return res.status(400).json({
                massage: error.message
            });
        }

     
    }

    async findByUsername(req: Request, res: Response){
        const { username } = req.params;

        const settingsServices = new SettingsService();

        const settings = await settingsServices.findByUsername(username);

        return res.json(settings);
    }

    async update(req: Request, res: Response){
        const { username } = req.params;
        const { chat } = req.body;

        const settingsServices = new SettingsService();

        const settings = await settingsServices.update(username, chat);

        return res.json(settings);
    }

}

export { SettingsController}