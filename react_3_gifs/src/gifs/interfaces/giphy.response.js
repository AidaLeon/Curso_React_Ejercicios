/**
 * @typedef {Object} GiphyResponse
 * @property {Datum[]} data
 * @property {Meta} meta
 * @property {Pagination} pagination
 */

/**
 * @typedef {Object} Datum
 * @property {string} type
 * @property {string} id
 * @property {string} url
 * @property {string} slug
 * @property {string} bitly_gif_url
 * @property {string} bitly_url
 * @property {string} embed_url
 * @property {string} username
 * @property {string} source
 * @property {string} title
 * @property {string} rating
 * @property {string} content_url
 * @property {string} source_tld
 * @property {string} source_post_url
 * @property {number} is_sticker
 * @property {Date} import_datetime
 * @property {Date|string} trending_datetime
 * @property {Images} images
 * @property {string} analytics_response_payload
 * @property {Analytics} analytics
 * @property {string} alt_text
 * @property {boolean} is_low_contrast
 * @property {User} [user]
 */

/**
 * @typedef {Object} Analytics
 * @property {Onclick} onload
 * @property {Onclick} onclick
 * @property {Onclick} onsent
 */

/**
 * @typedef {Object} Onclick
 * @property {string} url
 */

/**
 * @typedef {Object} Images
 * @property {FixedHeight} original
 * @property {FixedHeight} fixed_height
 * @property {FixedHeight} fixed_height_downsampled
 * @property {FixedHeight} fixed_height_small
 * @property {FixedHeight} fixed_width
 * @property {FixedHeight} fixed_width_downsampled
 * @property {FixedHeight} fixed_width_small
 */

/**
 * @typedef {Object} FixedHeight
 * @property {string} height
 * @property {string} width
 * @property {string} size
 * @property {string} url
 * @property {string} [mp4_size]
 * @property {string} [mp4]
 * @property {string} webp_size
 * @property {string} webp
 * @property {string} [frames]
 * @property {string} [hash]
 */

/**
 * @typedef {Object} User
 * @property {string} avatar_url
 * @property {string} banner_image
 * @property {string} banner_url
 * @property {string} profile_url
 * @property {string} username
 * @property {string} display_name
 * @property {string} description
 * @property {string} instagram_url
 * @property {string} website_url
 * @property {boolean} is_verified
 */

/**
 * @typedef {Object} Meta
 * @property {number} status
 * @property {string} msg
 * @property {string} response_id
 */

/**
 * @typedef {Object} Pagination
 * @property {number} total_count
 * @property {number} count
 * @property {number} offset
 */
