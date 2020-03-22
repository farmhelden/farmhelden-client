import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const domain = publicRuntimeConfig.API_PATH;

export default {
    user: {
        signIn: domain + '/auth/sign_in',
        auth: domain + '/auth',
    },
    campaigns: {
        collection: domain + '/campaigns'
    },
    locations: {
        geoJson: domain + '/locations/all_as_geo_json'
    }
}
