const {Trip} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')


class TripController{
  async create(req, res, next) {
    try {
        const { name, price, rating } = req.body
        let fileName = null; // Устанавливаем значение по умолчанию null для изображения
        if (req.files && req.files.img) {
            const { img } = req.files
            fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        }
        const trip = await Trip.create({ name, price, rating, img: fileName })
        return res.json(trip)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}

    
    async getAll(req, res) {
        const trips = await Trip.findAll()
        return res.json(trips)
    }
    
    async getById(req, res) {
        const id = req.params.id;
        const trip = await Trip.findByPk(id)

        return res.json(trip)
    }

    async update(req, res, next) {
      try {
          const { id } = req.params;
          const { name, price, rating } = req.body;
          let fileName = null;

          if (req.files && req.files.img) {
              const { img } = req.files;
              fileName = uuid.v4() + ".jpg";
              img.mv(path.resolve(__dirname, '..', 'static', fileName));
          } else {
              // Если изображение не было обновлено, сохраняем текущее изображение в базе данных
              const trip = await Trip.findByPk(id);
              if (trip) {
                  fileName = trip.img; // Получаем текущее изображение из базы данных
              }
          }

          const [updatedRowsCount, updatedTrip] = await Trip.update(
              { name, price, rating, img: fileName },
              { where: { id }, returning: true }
          );

          if (updatedRowsCount === 0 || !updatedTrip) {
              return res.status(404).json({ error: 'Trip not found' });
          }

          return res.json(updatedTrip[0]);
      } catch (e) {
          next(ApiError.badRequest(e.message));
      }
  }
    
    async delete(req, res) {
        const id = req.params.id;
      
        try {
          const trip = await Trip.findByPk(id);
          if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
          }
      
          // Удаляем поездку
          await trip.destroy();
      
          return res.json({ message: 'Trip deleted successfully' });
        } catch (error) {
          return res.status(500).json({ error: 'Failed to delete trip' });
        }
      }
}

module.exports = new TripController()