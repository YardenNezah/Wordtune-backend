module.exports = {
    async beforeCreate(event) {
        const maxReports = 10;
        // @ts-ignore
        const allReports= await strapi.api.report.services.report.find();
        const currentReportCount= allReports.pagination.total;
        
        if (currentReportCount >= maxReports) {
            throw new Error('Maximum number of reports exceeded (10)');
        }
    }
};