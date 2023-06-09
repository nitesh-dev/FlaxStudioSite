import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { ProjectLink, SocialLink } from './DataType';

const accountSchema = new Schema({

    _id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
    mode: { type: String, required: true, enum: ['none', 'google'] },
    profileImage: { type: String, required: false },
    role: { type: String, required: true, enum: ['CEO', 'CO', 'MEMBER'] },
    expertIn: { type: String, required: false },
    smallInfo: { type: String, required: false },
    dob: { type: Number, required: false },
    location: { type: String, required: false },
    experience: { type: Number, required: false },
    socialLinks: { type: Array<SocialLink>, required: false },
    about: { type: String, required: false },
    externalProjectsLinks: { type: Array<ProjectLink>, required: false },
    skills: { type: String, required: false },
    languages: { type: String, required: false },
    joinedAt: { type: Number, required: true },
    projects: { type: String, required: false },
    seoDescription: { type: String, required: false },
    isPublic: { type: Boolean, required: true },
    isApproved: { type: Boolean, required: true }

});

export const Account = mongoose.model("Account", accountSchema)
export const RejectedAccount = mongoose.model("RejectedAccount", accountSchema)


const productSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    dashIconUrl: { type: String, required: false },
    dashDescription: { type: String, required: true },
    dashPlatform: { type: String, required: true },
    dashTeamLead: { type: String, require: true },
    dashStartedAt: { type: Number, require: true },
    dashCompletedAt: { type: Number, require: false },
    dashStatus: { type: String, require: true },

    // ----------- product page ----------
    landingDescription: { type: String, required: false },
    landingImageUrl: { type: String, required: false },
    playStoreUrl: { type: String, required: false },
    productSeoDesc: { type: String, required: false },
    productAboutDesc: { type: String, require: false },
    productAboutEndDesc: { type: String, require: false },
    productFeatures: { type: String, require: false },

    // ------------- privacy page ---------------
    privacySeoDescription: { type: String, require: false },
    privacyAboutDesc: { type: String, require: false },

})

export const Product = mongoose.model("Product", productSchema)


