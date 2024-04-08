import inventoryProfile from '../Model/inventoryProfileModel.js'

//data create
export const CreateProfileDetails = async (req, res) => {
    const {Id,name,email,place,phone} = req.body;
  
    try{
      const newDetails = new inventoryProfile({
    Id,name,email,place,phone
      })
      await newDetails.save();
      res.status(201).json({ message: "Details created successfully", data: newDetails });

    }
   catch  (error){
    console.error("Error creating details:", error);
    res.status(500).json({ message: "Failed to create details" });
   }
   
  };


  //Read details by ID
export const getAllProfilDetails = async (req, res) => {
  try {
      const allDetails = await inventoryProfile.find();
      if (!allDetails || allDetails.length === 0) {
          return res.status(404).json({ message: "No details found" });
      }
      res.json({ message: "Details found", data: allDetails });
  } catch (error) {
      console.error("Error fetching details:", error);
      res.status(500).json({ message: "Failed to fetch details" });
  }
};


//Read details by ID
export const getOneProfileDetails = async (req, res) => {
  try {
      const oneDetails = await inventoryProfile.findById(req.params.id);
      if (!oneDetails) {
          return res.status(404).json({ message: "No details found" });
      }
      res.json({ message: "Details found", data: oneDetails });
  } catch (error) {
      console.error("Error fetching details:", error);
      res.status(500).json({ message: "Failed to fetch details" });
  }
};

// Update details by ID
export const updateProfileDetailsById = async (req, res) => {
  const { id } = req.params;
  const {Id,name,email,place,phone} = req.body;

  try {
      const updatedDetails = await inventoryProfile.findByIdAndUpdate(id, {
        Id,name,email,place,phone
      }, { new: true });

      if (!updatedDetails) {
          return res.status(404).json({ message: "Details not found" });
      }
      res.json({ message: "Profile Details updated successfully", data: updatedDetails });
  } catch (error) {
      console.error("Error updating details:", error);
      res.status(500).json({ message: "Failed to update Profile details" });
  }
};